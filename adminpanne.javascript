// Admin login function
function adminLogin() {
  const email = "ebirone4@gmail.com";
  const password = "secure123";
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      showAdminControls(); // Show edit buttons
    });
}

// Update data for ALL users
function updateStoreInfo(newData) {
  db.collection("storeData").doc("current")
    .update(newData)
    .then(() => {
      alert("Updated for all visitors!");
    });
}