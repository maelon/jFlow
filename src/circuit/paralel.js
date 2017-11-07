/*===================================================================
#    FileName: paralel.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2017-10-13 12:19
# Description: Extend the base class Circuit.
===================================================================*/

import Circuit from 'circuit/index';

import MSGEnum from 'const/index';
import ErrorEnum from 'const/error';

/**
* Parallelly process the stored elements.
* @class
*/
class ParallelCircuit extends Circuit {

    /**
    * @constructor
    */
    constructor() {
        super();
    }

    /**
    * @description Process elements stored in parallel.
    */
    process() {
        const elements = this.elements.slice();
        const datas = this.getInputData();
        const elements_promise = [];
        for(let i = 0; i < elements.length; i++) {
            elements_promise.push(this._processElement(elements[i], datas[i]));
        }
        return Promise.all(elements_promise);
    }

    saveInputData(data) {
        if(Array.isArray(data)) {
            if(data.length == this.elements.length) {
                super.saveInputData(data);
            }
            throw new Error(ErrorEnum.PARALLELCIRCUIT_INPUT_DATA_ARRAY_LENGTH);
        } 
        throw new Error(ErrorEnum.PARALLELCIRCUIT_INPUT_DATA_ARRAY_TYPE);
    }

    saveProcessData(data) {
        if(Array.isArray(data)) {
            if(data.length == this.elements.length) {
                super.saveProcessData(data);
            }
            throw new Error(ErrorEnum.PARALLELCIRCUIT_PROCESS_DATA_ARRAY_LENGTH);
        } 
        throw new Error(ErrorEnum.PARALLELCIRCUIT_PROCESS_DATA_ARRAY_TYPE);
    }

    saveOutputData(data) {
        if(Array.isArray(data)) {
            if(data.length == this.elements.length) {
                super.saveOutputData(data);
            }
            throw new Error(ErrorEnum.PARALLELCIRCUIT_OUTPUT_DATA_ARRAY_LENGTH);
        } 
        throw new Error(ErrorEnum.PARALLELCIRCUIT_OUTPUT_DATA_ARRAY_TYPE);
    }
}

export default ParallelCircuit;
