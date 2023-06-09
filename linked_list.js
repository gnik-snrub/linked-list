const node = () => {
  return {
    value: null,
    next: null,
  }
}

const linkedList = () => {
  let head = node()
  let tail = () => {
    let curr = head
    if (!curr) { return null }
    while (curr.next) { curr = curr.next }
    return curr 
  }

  const append = (newData) => {
    const newNode = node()
    newNode.value = newData
    if (!tail()) {
      head = newNode
    } else {
      tail().next = newNode
    }
  }

  const prepend = (newData) => {
    const newNode = node()
    newNode.value = newData
    newNode.next = head
    head = newNode
  }

  const size = () => {
    let count = head ? 1 : 0
    let current = head
    while (current.next) {
      count++
      current = current.next
    }
	  return count
  }

  const at = (index) => {
    let curr = head
    let count = 0
    while (count < index) {
      if (curr.next === null) {
        return null
      }
      curr = curr.next
      count++
    }
    return curr
  }

  const pop = () => {
    if (!head || !head.next) {
      head = null
    } else {
      const secondLastNode = size() - 2
      at(size() - 2).next = null
    }
  }

  const contains = (searchValue) => {
    let curr = head
    while (curr) {
      if (curr.value === searchValue) {
        return true
      }
      curr = curr.next
    }
    return false
  }

  const find = (findValue) => {
    let curr = head
    let count = 0
    while (curr) {
      if (curr.value === findValue) {
        return count
      }
      count++
      curr = curr.next
    }
    return null
  }

  const toString = () => {
    let listString = ''
    let curr = head
    while (curr) {
      listString += '(' + curr.value + ')'
      if (curr.next) {
        listString += ' -> '
      }
      curr = curr.next
    }
    return listString
  }

  const insertAt = (newValue, index) => {
    const newNode = node()
    newNode.value = newValue
    if (index === 0) {
      newNode.next = head
      head = newNode
    } else {
      newNode.next = at(index)
      at(index - 1).next = newNode
    }
  }

  const removeAt = (index) => {
    if (index === 0) {
      head = head.next
    } else {
      at(index - 1).next = at(index).next
    }
  }

  const wrapper = {
    get head() {
      return head
    },
    tail,
    prepend,
    append,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }

  return wrapper
}
