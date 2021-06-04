var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/keylistener/", "/dist/servoy/keylistener/");
zip.addLocalFolder("./keylistener/", "/keylistener/");
zip.writeZip("keylistener.zip");