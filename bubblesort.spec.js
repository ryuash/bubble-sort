describe('Bubble Sort', function(){
    let anArr;

    beforeEach(()=>{
        anArr=[4,3,5,1];
    })

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('returns a sorted array',function(){
        expect(bubbleSort(anArr)).toEqual([1,3,4,5]);
    });

    it('returns base case',function(){
        expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    })
  });