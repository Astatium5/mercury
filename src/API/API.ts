import axios from 'axios';
import dotenv from 'dotenv';

// process.env.

dotenv.config();

const BASE_URL: string = 'http://portal.coinroutes.com/';
const token: string = process.env.TOKEN;

axios.defaults.baseURL = BASE_URL;

const API = {
    async getCurrencyPairs() {
        const response = await axios.get(`/api/currency_pairs/`, {
            headers: {Authorization: token},
        });
    },
    async getCostCalculator(payload: something) {
        const response = await axios.post(`/api/cost_calculator/`, {
            headers: {Authorization: token}, data: payload,
        });
    },
    async getRealPrice() {
        const response = await axios.get(`/api/streaming/real_price`, {
            headers: {Authorization: token},
        });
    },
};
