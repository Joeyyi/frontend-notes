export default {
    getUserData() {
        return localStorage.getItem('user') || [];
    },
    setUserData(id) {
        var arr = this.getUserData();
        var index = arr.indexOf(id);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(id);
        }
    } 
}

