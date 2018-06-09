
/**
 * @description Calculates the total sum up of a dimension
 * @param {Array} data Data Source
 * @param {String} field Concerning Field
 * @returns {Number} 
 */
export function getTotal(data,field){

    const suma = (a,b)=> a+Number(b[field]);
    return data.reduce(suma,0);

}

/**
 * @description Tells us the percentage for a given variable within a dimension
 * @param {int} figure 
 * @param {int} total 
 */
export function getPercentage(figure,total){
   
    return Math.round(figure*100/total);

}

/**
 * @description Sums up an Array until a given Index. Creates comulative sum ups
 * @param {Number} index 
 * @param {Array} data 
 * @param {String} field 
 * @returns {Number}
 */
export function cumulative(index,data,field){

    const sliced = data.slice(0,index+1);

    return getTotal(sliced,field);

}

/**
 * @description Returns the cumulative Percentage.
 * @param {Number} index 
 * @param {Array} data 
 * @param {String} field 
 * @param {Number} total 
 * @returns {Number}
 */
export function cumulativePercentage(index,data,field,total){
    
    const sliced = data.slice(0,index+1);
    const percentage = sliced.map((item)=>{
        
        let figure = Number(item[field]);
        return {percent:getPercentage(figure,total)};

    });
    
    return getTotal(percentage,'percent');

}

/**
 * @description Which index is the 20% of a population
 * @param {Array} total 
 * @returns {Number}
 */
export function getTwenty(population){

    const total = population.length;
    const twenty = Math.round(20*total/100);
    return twenty;

}