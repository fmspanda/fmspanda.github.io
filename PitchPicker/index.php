<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	 <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- <link rel="stylesheet" type="text/css" href="../default.css"> -->
	<link rel="stylesheet" type="text/css" href="../framework/foundation/css/foundation.min.css">
	<link rel="stylesheet" type="text/css" href="../framework/foundation/css/app.css">
	<link rel="stylesheet" type="text/css" href="./style.css">
	<title>PitchPicker | あの曲の最高音、最低音</title>
	<script type="text/javascript" src="../lib/jquery-2.0.0.min.js"></script>
	<script src="../framework/foundation/js/vendor/foundation.min.js"></script>

	<script type="text/javascript" src="./main.js"></script>
	<link rel="shortcut icon" href="../image/pitchpicker.ico">
</head>
<body>
	<header class="header">
		<div class="row">
			<div class="large-12 columns"><h1 id="title">PitchPicker<font size="3"></font></h1></div>
		</div>
	</header>

	<header class="subheader">
		<div class="row">
			<div class="large-12 medium-centered columns">
				<h6>
					動画として公開されていればどんな曲でも音域を取得できます！<br>
					間違っている曲、載っていない曲があればSongleで訂正や追加が可能です
				</h6>
			</div>
		</div>
	</header>

	<form id="search-form" action="https://widget.songle.jp/api/v1/songs/search.json?" method="GET">
		<div class="row">
      		<div class="large-12 columns medium-centered">
      	  		<input id="query" name="q" type="text" id="right-label" placeholder="楽曲名, アーティスト名, コード進行(A, Bm, E...)">
      		</div>
      		<div class="large-12 columns medium-centered">
      			<a id="submit" href="" class="button" processing="false">検索</a>
      		</div>
    	</div>
	</form>

	<div id="result" class="row">
		<div class="result" index="-1" class="row">
		</div>
	</div>

	<div class="row">
		<div class="large-12 columns">
			<h4 class="medium">注意点</h4>
		</div>
	</div>

	<div class="row">
		<div class="large-12 columns medium-centered">
			<p class="medium">
				Songleはユーザーが編集して初めて正確な情報になります。その為、有名でない曲などは正確な音域が出ていないことが殆どです。特に、最低音がlowlow~となっているものは誰も編集していない可能性が高いです。<br>
			まだ編集済みでない場合、是非Songleで編集をお願いします。
			</p>
		</div>
	</div>
	

	<hr>
	<div class="footer row">
		<div id="large-12 columns medium-centered">
			<p class="medium">
				連絡先: <a href="https://twitter.com/revC_Rain" target="_blank">@revC_Rain</a>
			</p>
		</div>
	</div>
			
</body>
</html>