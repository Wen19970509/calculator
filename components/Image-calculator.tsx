import React from 'react';

const ImageCal = () => {
    const [ratioW, setRatioW] = React.useState(null);
    const [ratioH, setRatioH] = React.useState(null);
    const [sizeW, setSizeW] = React.useState(null);
    const [sizeH, setSizeH] = React.useState(null);
    const focusRef = React.useRef(null);
    // const [hash, setHash] = React.useState(null);
    const handleRatioWChange = (e) => {
        setRatioW(e.target.value);
    };
    const handleRatioHChange = (e) => {
        setRatioH(e.target.value);
    };
    const handleSizeWChange = (e) => {
        setSizeW(e.target.value);
    };
    const handleSizeHChange = (e) => {
        setSizeH(e.target.value);
    };
    //算最大公因數
    const _hash = (a: number, b: number) => {
        if (b == 0) return a;
        return _hash(b, a % b);
    };
    const calSize = () => {
        const cal = (s: number, r: number) => {
            return s / r;
        };
        if (sizeW) {
            const n = cal(sizeW, ratioW);
            setSizeH(ratioH * n);
        } else if (sizeH) {
            const n = cal(sizeH, ratioH);
            setSizeW(ratioW * n);
        }
    };
    const calRatio = () => {
        const common = _hash(sizeW, sizeH);
        setRatioW(sizeW / common);
        setRatioH(sizeH / common);
    };
    const handleClick = (e) => {
        e.preventDefault();
        if(sizeW == 0 && sizeH == 0){
            alert("WTF? size can't be 0")
            setSizeH('')
            setSizeW('')
        }
        if (sizeW && sizeH && ratioW && ratioH) {
            if (focusRef.current == 'sizeW' || focusRef.current == 'sizeH') {
                calRatio();
            } else {
                calSize();
            }
        } else if (sizeW && sizeH) {
            calRatio();
        } else if (ratioW && ratioH) {
            calSize();
        }
    };
    const handleFocus = (e) => {
        focusRef.current = e.target.id;
    };
    const handleRatioRemove = () => {
        setRatioH('');
        setRatioW('');
    };
    const handleSizeRemove = () => {
        setSizeH('');
        setSizeW('');
    };
    return (
        <div className='mt-20 '>
            <div className='grid grid-flow-col gap-8 justify-center '>
                <div>
                    <p className='mb-8 text-4xl text-center relative'>
                        Ratio {''}
                        <span
                            className='material-icons cursor-pointer hover:text-blue-400 absolute translate-x-1/2 translate-y-1/2 transform'
                            onClick={handleRatioRemove}
                        >
                            undo
                        </span>
                    </p>
                    <div className='grid gap-4 grid-flow-col'>
                        <input
                            className='border-2 border-gray-600 rounded-lg p-4 text-3xl focus:outline-none focus:ring focus:ring-gray-400 w-72'
                            type={'number'}
                            onChange={handleRatioWChange}
                            value={ratioW}
                            id={'ratioW'}
                            onFocus={handleFocus}
                        />
                        <span className='text-4xl leading-inherit self-center'> : </span>
                        <input
                            className='border-2 border-gray-600 rounded-lg p-4 text-3xl focus:outline-none focus:ring focus:ring-gray-400 w-72'
                            type={'number'}
                            onChange={handleRatioHChange}
                            value={ratioH}
                            onFocus={handleFocus}
                            id={'ratioH'}
                        />
                    </div>
                </div>
                <div>
                    <p className='mb-8 text-4xl text-center relative'>
                        Size(px){' '}
                        <span
                            className='material-icons cursor-pointer hover:text-blue-400 absolute translate-x-1/2 translate-y-1/2 transform'
                            onClick={handleSizeRemove}
                        >
                            undo
                        </span>
                    </p>
                    <div className='grid gap-4 grid-flow-col'>
                        <input
                            className='border-2 border-gray-600 rounded-lg p-4 text-3xl focus:outline-none focus:ring focus:ring-gray-400 w-72'
                            type={'number'}
                            onChange={handleSizeWChange}
                            value={sizeW}
                            onFocus={handleFocus}
                            id={'sizeW'}
                        />
                        <span className='text-4xl leading-inherit self-center'> x </span>
                        <input
                            className='border-2 border-gray-600 rounded-lg p-4 text-3xl focus:outline-none focus:ring focus:ring-gray-400 w-72'
                            type={'number'}
                            onChange={handleSizeHChange}
                            value={sizeH}
                            onFocus={handleFocus}
                            id={'sizeH'}
                        />
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-20'>
                <button className='px-8 py-4 border border-gray-500 rounded-xl text-4xl hover:bg-gray-600 transform duration-200 ' onClick={handleClick}>
                    Calculate
                </button>
            </div>
            <div className='text-center text-2xl mt-12'>
                <p className='mb-6'>
                    Enter img <span className='font-bold text-blue-400'>ratio</span> or <span className='font-bold text-blue-400'>size</span>.{' '}
                </p>
                <p>
                    Click <span className='font-bold text-blue-400'>Calculate</span> to receive the corresponding value for{' '}
                    <span className='font-bold text-blue-400'>ratio</span> / <span className='font-bold text-blue-400'>size</span>.
                </p>
            </div>
        </div>
    );
};

export default ImageCal;
