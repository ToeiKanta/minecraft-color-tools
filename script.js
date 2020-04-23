// Try edit message
const data = {
    message: 'INPUT TEXT',
  }
  
  $('#msg').html(data.message)
  String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };
  function copyOutput() {
    /* Get the text field */
    var copyText = document.getElementById("out");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    //alert("Copied the text: " + copyText.value);
  }
  $("#rainbowBtn").click(function(){
      var str = $("#txt").val();
      var code = ["&c","&6","&e","&2","&a","&b","&3","&d","&5"]
      var i;
      var text = ""
      for (i = 0; i < str.length; i++) {
        text += code[i%code.length] + str[i];
      }
      $('#out').val(text)
      copyOutput()
      //var result = "foo baz".splice(4, 0, "bar ");
  });
  $("#BlueWhiteBtn").click(function(){
      var str = $("#txt").val();
      var code = ["&b","&f"]
      var i;
      var text = ""
      for (i = 0; i < str.length; i++) {
        text += code[i%code.length] + str[i];
      }
      $('#out').val(text)
      copyOutput()
      //var result = "foo baz".splice(4, 0, "bar ");
  });
  $("#RedWhiteBtn").click(function(){
      var str = $("#txt").val();
      var code = ["&c","&f"]
      var i;
      var text = ""
      for (i = 0; i < str.length; i++) {
        text += code[i%code.length] + str[i];
      }
      $('#out').val(text)
      copyOutput()
      //var result = "foo baz".splice(4, 0, "bar ");
  });
  $("#GreenWhiteBtn").click(function(){
      var str = $("#txt").val();
      var code = ["&a","&f"]
      var i;
      var text = ""
      for (i = 0; i < str.length; i++) {
        text += code[i%code.length] + str[i];
      }
      $('#out').val(text)
      copyOutput()
      //var result = "foo baz".splice(4, 0, "bar ");
  });
  $("#PurpleWhiteBtn").click(function(){
      var str = $("#txt").val();
      var code = ["&d","&f"]
      var i;
      var text = ""
      for (i = 0; i < str.length; i++) {
        text += code[i%code.length] + str[i];
      }
      $('#out').val(text)
      copyOutput()
      //var result = "foo baz".splice(4, 0, "bar ");
  });
  $("#ConvertBtn").click(function(){
      var str = $("#txt").val();
      var i;
      var text = ""
      var s = str.search('§');
      var n = str.search("}]}");
      for (i = s; i < n-1; i++) {
        if(str[i] == '§'){
          text += '&'
        }else{
          text += str[i];
        }
      }
      $('#out').val(text)
      copyOutput()
  });