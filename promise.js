// new Promise(executor)
// Promise.resolve(reason)
// Promise.reject(value)
// Promise.prototype.then(func)
// Promise.prototype.catch(func)
// Promise.prototype.finally(func)
const promiseFunc1 = (url) => {
	const runPromise = (resolve, reject) => {
		fetch(url)
  		.then((response) => response.json())
		  .then((data) => {
      	console.log(`resolve`, data)
        resolve(data)
      })
			.catch((error) => {
      	console.log(`reject`, error)
        reject(error)
      })
      .finally(() => {
    		console.log('completed')
  		})
	}

	return new Promise(runPromise)
}

promiseFunc1(`https://jsonplaceholder.typicode.com/posts/1`)
promiseFunc1(`https://jsonplaceholderx.typicode.com/posts/1`)


// Promise.all(iterable) (supposed that iterable is the type of Array<Promise>
const promise1 = promiseFunc1(`https://jsonplaceholder.typicode.com/posts/1`)
const promise2 = promiseFunc1(`https://jsonplaceholder.typicode.com/posts/2`)
const promise3 = promiseFunc1(`https://jsonplaceholder.typicode.com/posts/3`)

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(`Promise all`, values)
})
