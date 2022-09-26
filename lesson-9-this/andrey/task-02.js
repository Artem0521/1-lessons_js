

const phonebook = {
    contact: [],
    add(data) {
        const  newContact = {
            list: 'default',
            ...data,
            id: this.generateId(),
            createdAt: this.getData(),
        },
    },
    list() {

    },
    generateId() {

    },
    getData() {

    },
}



