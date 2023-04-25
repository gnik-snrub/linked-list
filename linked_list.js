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

  const wrapper = {
    get head() {
      return head
    },
    tail,
    prepend,
    append,
    size,
    at
  }

  return wrapper
}
