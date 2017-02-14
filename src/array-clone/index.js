function arrayClone( arr ) {
    let copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for(let i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    }
    if( typeof arr === 'object' ) throw 'Cannot clone array containing an object!';

    return arr;
}


module.exports = arrayClone;
