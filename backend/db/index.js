import express from 'express'
import pool from '../server.js'; 
import pkg from 'pg';
const { Pool } = pkg;
import fs from 'fs';

const seedQuery = fs.readFileSync('db/seeding.sql',{encoding:'utf-8'})
pool.query(seedQuery,(err,result)=>{
    console.log(err)
    console.log('seeding berhasil')
    pool.end()
});