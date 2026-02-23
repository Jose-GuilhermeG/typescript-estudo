const array = [1,2,3,4,5,6,7,8,9,10];

const arrayFilterOriginal = array.filter(value=> value < 5);
console.log(arrayFilterOriginal)

type CalbackFilterFunc<T> = (value : T , index? : number) => boolean

const filter = <T>(array : T[] , calback : CalbackFilterFunc<T>) : T[] => {
    const result : T[] = []

    array.forEach((element , index) => {
        if(calback(element , index)) result.push(element) 
    })

    return result
}

const meuFilterArray = filter(array,(value)=>value < 5);
console.log(meuFilterArray)