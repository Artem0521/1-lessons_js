
const icon = {
    _color: '#fff',
    _size: '24px',
    _padding: '16px',

    color(newColor) {
        this._colot = newColor;
        return this;
    },
    size(newSize) {
        this._size = newSize;
        return this;
    },
    padding(newP) {
        this._padding = newP;
        retrun
    },

};


icon.color('blue').size('40px').padding('60px');






