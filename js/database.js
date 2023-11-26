const dbCartName = 'carts';
const dbUserName = 'users';
const dbProductName = 'products';
const sessionLoginUser = 'loginUser';

const firebaseConfig = {
    apiKey: 'AIzaSyBPKrkOWpiwO2wH_gb5w51k1d5bngswEYA',
    authDomain: 'fgw-1633.firebaseapp.com',
    projectId: 'fgw-1633',
    storageBucket: 'fgw-1633.appspot.com',
    messagingSenderId: '194069942003',
    appId: '1:194069942003:web:63abd84ef7b6a22b283186'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function getSessionLoginUser() {
    return JSON.parse(sessionStorage.getItem(sessionLoginUser));
}

function setSessionLoginUser(user) {
    sessionStorage.setItem(sessionLoginUser, JSON.stringify(user));
}

function removeSessionLoginUser() {
    sessionStorage.removeItem(sessionLoginUser);
}

function dbGetProducts() {
    return new Promise((resolve, reject) => {
        db.collection(dbProductName)
            .get()
            .then((querySnapshot) => {
                const products = [];

                querySnapshot.forEach((doc) => {
                    const productData = doc.data();

                    const product = {
                        id: doc.id,
                        name: productData.name,
                        price: productData.price,
                        image: productData.image,
                        description: productData.description,
                    };

                    products.push(product);
                });

                resolve(products);
            })
            .catch((error) => {
                console.error('Error getting products:', error);
                reject(error);
            });
    });
}

function dbAddProduct(product) {
    return new Promise((resolve, reject) => {
        db.collection(dbProductName)
            .add(product)
            .then(() => { resolve(true); })
            .catch((error) => {
                console.error('Error adding product:', error);
                reject(false);
            });
    });
}

function dbAddUser(user) {
    return new Promise((resolve, reject) => {
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                userCredential.user.updateProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });

                resolve(userCredential.user);
            })
            .catch((error) => {
                console.error('Error creating user account:', error);
                reject(error);
            });
    });
}

function dbAuthenticate(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => { resolve(userCredential.user); })
            .catch((error) => {
                console.error('Authentication failed:', error);
                reject(error);
            });
    });
}

/*
function getSessionCarts() {
    return JSON.parse(sessionStorage.getItem(sessionCarts)) || [];
}

function setSessionCarts(carts) {
    sessionStorage.setItem(sessionCarts, JSON.stringify(carts));
}

function getSessionCart(email) {
    const carts = getSessionCarts();
    return carts.find((item) => item.email === email);
}
*/