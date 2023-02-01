import React from "react";

const isLogged = localStorage.getItem('token') !== null;
const login = (token) => localStorage.setItem('token', token);
const logout = () => localStorage.removeItem('token');

export {isLogged, login, logout};