"use strict";

import autentification, { isAutentifikace, notAutentifikace } from './autentification.js';
import register from './register.js';
import './mqtt.js';

const selectFormAutentifikace = document.querySelector('#authorization');
const selectFormRegister = document.querySelector('#autentification');
const registrationForm = document.querySelector(".registrationForm");
const authorizationForm = document.querySelector(".authorizationForm");

selectFormAutentifikace?.addEventListener('click', () => {
    registrationForm.classList.add('hidden');
    authorizationForm.classList.remove('hidden');
})

selectFormRegister?.addEventListener('click', () => {
    registrationForm.classList.remove('hidden');
    authorizationForm.classList.add('hidden');
})

document.querySelector('.btn-register').addEventListener('click', (event) => {
    event.preventDefault();
    register();
});

document.querySelector('.btn-authorization').addEventListener('click', (event) => {
    event.preventDefault();
    autentification();
});

const btnExit = document.querySelector('.btn-exit');

if (sessionStorage.getItem("statusUser") === 'admin') {
    isAutentifikace();
} else {
    notAutentifikace();
}

btnExit?.addEventListener('click', () => {
    sessionStorage.setItem("status", "");
    sessionStorage.setItem("user", "");
    notAutentifikace();
})









