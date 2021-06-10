import firebase from 'firebase'
import { configData } from "./config"

export const fb = firebase.initializeApp(configData)