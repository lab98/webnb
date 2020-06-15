var express = require('express');
var router = express.Router();
var error = require('http-errors');

// carichiamo crypto, la configurazione e il middleware per il database
const crypto = require('crypto');
const {
  config
} = require('../db/config');
const {
  makeDb,
  withTransaction
} = require('../db/dbmiddleware');


/* GET users listing. */
router.get('/', function (req, res, next) {
  next(createError(403));
});

/* Login Utente */
router.post('/login', autenticazione);

// middleware di autenticazione
async function autenticazione(req, res, next) {
  // istanziamo il middleware
  const db = await makeDb(config);
  let results = {};
  try {

    await withTransaction(db, async () => {
      // inserimento utente
      results = await db.query('SELECT * FROM `utente`\
            WHERE email = ?', [
          req.body.email
        ])
        .catch(err => {
          throw err;
        });

      if (results.affectedRows == 0) {
        console.log('Utente non trovato!');
        next(createError(404, 'Utente non trovato'));
      } else {
        /* let pwdhash = crypto.createHash('sha512'); // istanziamo l'algoritmo di hashing
         pwdhash.update(req.body.pass); // cifriamo la password
         let encpwd = pwdhash.digest('hex'); // otteniamo la stringa esadecimale*/
        let encpwd = req.body.pass;

        if (encpwd != results[0].password) {
          // password non coincidenti
          console.log('Password errata!');
          next(createError(403, 'Password errata'));
        } else {
          console.log('Utente autenticato');
          console.log(results);
          // recupero dello user id
          let id_utente = results[0].id_utente;
          let email = results[0].email;
          let tipo = results[0].tipo;

          console.log(id_utente + " " + email + " " + " " + tipo);
        }
      }
    });
  } catch (err) {
    console.log(err);
    next(createError(500));
  }
}

module.exports = router;