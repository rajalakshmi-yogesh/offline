   window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 var db;
                if(!window.indexedDB)
                {
                    console.log("Your Browser does not support IndexedDB");
                }
var request = window.indexedDB.open("testDB", 2);

                    request.onerror = function(event){
                        console.log("Error opening DB", event);
                    }
                    request.onupgradeneeded   = function(event){

                        console.log("Upgrading");
                        db = event.target.result;
                        var objectStore = db.createObjectStore("students", { keyPath : "rollNo" });
                    };
                    request.onsuccess  = function(event){
                        console.log("Success opening DB");
                        db = event.target.result;
                    }
 var transaction = db.transaction(["students"],"readwrite");
                    transaction.oncomplete = function(event) {
                        console.log("Success");
                    };
 
                    transaction.onerror = function(event) {
                        console.log("Error");
                    };  
                    var objectStore = transaction.objectStore("students");
 
                    objectStore.add({rollNo: rollNo, name: name});
db.transaction(["students"],"readwrite").objectStore("students").delete(rollNo);
  var request = db.transaction(["students"],"readwrite").objectStore("students").get(rollNo);
                    request.onsuccess = function(event){
                        console.log("Name : "+request.result.name);    
                    } 
                    var transaction = db.transaction(["students"],"readwrite");
                    var objectStore = transaction.objectStore("students");
                    var request = objectStore.get(rollNo);
                    request.onsuccess = function(event){
                        console.log("Updating : "+request.result.name + " to " + name);
                        request.result.name = name;
                        objectStore.put(request.result);
                    };