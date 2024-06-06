
function disableTextSelection(event) {  
    const allowed_tags = ["INPUT", "BUTTON"];
    if (!allowed_tags.includes(event.target.tagName)) {
      event.preventDefault();
    }
  }
  document.addEventListener('mousedown', disableTextSelection);
  // document.addEventListener('selectstart', disableTextSelection);