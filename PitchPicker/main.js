$(function() {
	$('#submit').click(function() {
        // 多重で実行の防止
        if ($(this).attr("processing") == "true") {
            console.log("taju");
            return;
        }

        $(this).attr('processing', "true");

		var $form = $('#search-form');

	    $.ajax({
	    	url: $form.attr('action'),
        	type: $form.attr('method'),
        	data: $form.serialize(),
        	dataType: 'json'
	    })
	    .done(function(json, status, jqXHR){
	    	$('#result').html("");
            
            for (var i = 0; i < (json.length > 5 ? 5 : json.length); i++) {
            	$('#result')
            	.append('<div class="result columns" index="' + i + '"></div>');

            	var regexp = new RegExp('http://songle.jp/songs/', "g");
            	var url = json[i]["url"].replace(regexp, "");

            	$('.result[index="'+i+'"]')
            	.append('<div class="large-8 columns"><a href=' + url+ '>' + json[i]["title"] + '</div>');
            	$('.result[index="'+i+'"]')
            	.append('<div class="large-4 columns">' + json[i]["artist"]['name'] + '</div>');
            	$('.result[index="'+i+'"]')
            	.append('<div class="large-4 columns high-pitch" index="' + i +'">最高音： </div>');
            	$('.result[index="'+i+'"]')
            	.append('<div class="large-4 columns low-pitch" index="' + i +'">最低音： </div>');
            	$('.result[index="'+i+'"]')
            	.append('<div class="large-4 columns"><a class="modify" href="' + json[i]['url'] + '">修正</a></div>');

            	$('#result')
            	.append('<hr>');

            	get_pitch(url, i);
            }

            $(this).attr("processing", "false");
        })
        .fail(function(data, error){
            $('#result').html(data);
            alert(error);
            $(this).attr("processing", "false");
        });
        
        return false;
	});
});

function get_pitch(url, resultIdx) {
	// クロスドメイン制約があるためPHPを噛ませる
    $.ajax({
    	url: './get_pitch.php',
    	type: 'get',
    	data: {
    		'request': 'https://widget.songle.jp/api/v1/song/melody.json?url=' + url
    	},
    	dataType: "json"
    })
    .done(function(json){
    	var high_pitch = 0;
    	for (var i = 0; i < json['notes'].length; i++) {
    		var pitch = json['notes'][i]['number'];
    		if (pitch > high_pitch) {
    			high_pitch = pitch;
    		}
    	}
    	$('.high-pitch[index="' + resultIdx + '"]').append(num2str(high_pitch));

    	var low_pitch = 255;
    	for (var i = 0; i < json['notes'].length; i++) {
    		var pitch = json['notes'][i]['number'];
    		if (pitch < low_pitch && pitch != 0) {
    			low_pitch = pitch;
    		}
    	}
    	$('.low-pitch[index="' + resultIdx + '"]').append(num2str(low_pitch));
    })
    .fail(function(data, e){
    	console.log(e);
    });
    
}

function num2str(midinum) {
    var prefix = ["lowlow", "low", "mid1", "mid2", "hi", "hihi"]
    var suffix = ["C", "C#", "D", "D#", "E", 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    preidx = Math.floor((midinum - 21) / 12);
    sufidx = midinum % 12;
    return prefix[preidx] + suffix[sufidx];
}