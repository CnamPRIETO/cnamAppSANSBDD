exports.getProduits = (req, res) => {
    const produits = [
        {"ref": "Orange", "prix": 45, "desc": "Je suis une orange", "stock": 10},
        {"ref": "Banane", "prix": 56, "desc": "Banane", "stock": 5},
        {"ref": "Poire", "prix": 98, "desc": "Poire", "stock": 3},
        {"ref": "Pomme", "prix": 32, "desc": "Pomme", "stock": 1}
    ];

    res.setHeader('Content-Type', 'application/json');
    res.send(produits);
};
