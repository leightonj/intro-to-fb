$(document).ready(function() { 
    $('#a_share').click(function() {
        var obj = {
            method: 'feed',
            link: 'http://intro-to-fb.theiplatform.info/4_index.html',
            picture: 'http://intro-to-fb.theiplatform.info/img/facebook_icon_200_2.jpg',
            name: 'This is the Name',
            caption: 'This is the caption',
            description: 'This is the description'
        };
        
        function callback(response) {
            if (response != null) {
                $('#response').html("Post successful, ID: " + response['post_id']);
            }
        }
        
        FB.ui(obj, callback);
    });
});