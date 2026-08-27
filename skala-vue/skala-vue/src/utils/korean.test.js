import assert from 'node:assert/strict'
import { withSubjectParticle } from './korean.js'

assert.equal(withSubjectParticle('서울'), '서울이')
assert.equal(withSubjectParticle('대구'), '대구가')
