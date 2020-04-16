'use strrict';

const superagent = require('superagent');

class Notes {

    constructor(){
    }
}

    fetch(opts) {
        if(opts) {
            return superagent(opts.method)
            .send(opts.body)
            .then(this.render)
            .then(() => this.save(opts))
        }
    }

    render(results) {
        console.log(results.body);
    }

    async save(opts) {
        let record = new Note(opts);
        let saved = await record.save();
        return saved;
    }

}

module.exports = Notes; 
