import assert from 'node:assert/strict'
import { recommendActivity } from './weather.js'

assert.match(recommendActivity({ condition: 'Clear', status: '맑음', temp: 22, cloudiness: 10 }), /피크닉/)
assert.match(recommendActivity({ condition: 'Rain', status: '비', temp: 20, cloudiness: 100 }), /실내/)
