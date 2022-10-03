function newHeader (header) {
    var head = document.createElement('h'+ header);
    var hText = document.createTextNode('the Ancient Civilization of Rome'+ header);
    head.appendChild(hText);
    document.body.appendChild(head);
  }
  
  function newPara (para) {
    var newP = document.createElement('p');
    var newPText = document.createTextNode("In modern historiography, ancient Rome refers to Roman civilization from the foudning of the city of Rome in the 8th century BC to the collapse of the Western Roman Empire in the 5th century AD. It encompasses the Roman Kingdom, Roman Republic and Roman Empire until the fall of the western empire " + para);
    newP.appendChild(newPText);
    var intoH = document.getElementsByTagName('h' + para)[0];
    intoH.appendChild(newP);
  }
  
  for (i = 1; i <= 1; i++) {
    newHeader(i);
  }
  for (i = 1; i <= 1; i++) {
    newPara(i);
  }
  