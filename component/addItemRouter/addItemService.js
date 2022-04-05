const model = require('../../model/knex');

exports.addNewItem = async (cardId, productId, quantity) => {
    try {
        const result = await model.knexObj('card_item').insert({
            cardId: cardId,
            productId: productId,
            quantity: quantity
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }

}


exports.removeItem = async (cardId, productId) => {
    try {
        const result = await model.knexObj('card_item').where({
            cardId: cardId,
            productId: productId
        }).del();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.depositItem = async (cardId, productId, quantity) => {
    try {
        const result = await model.knexObj('card_item').where({
            cardId: cardId,
            productId: productId
        }).update({
            quantity: quantity
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.findCardById = async (cardId) => {
    try {
        const result = await model.knexObj('card_item').where({
            cardId: cardId
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

