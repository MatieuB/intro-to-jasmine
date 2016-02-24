var rides = require('../lib/rides')

describe('checks if child meets height requiremments', function() {
      var child1 = {
        height: 3,
        name: "Julian",
        age: 3
      }
      var child2 = {
        height: 4,
        name: "Cero",
        age: 4
      }
      var child3 = {
        height: 8,
        name: "matthew",
        age: 30
      }
      var ride1 = {
        minHeight:3,
        maxHeight:7,
      };
      var ride2 = {
        minHeight:4,
        maxHeight:7,
      };
      it('determines when a child is too short', function() {
        expect(rides.isTallEnough(child1,ride2)).toEqual(false)
      })
      it('determines when a child is tall enough', function() {
        expect(rides.isTallEnough(child2,ride2)).toEqual(true)
      })
      it('determines when a child is too tall', function() {
        expect(rides.isTallEnough(child3,ride2)).toEqual(false)
      })
    })
