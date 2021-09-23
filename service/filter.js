const {
    items
} = require('../models/category');

exports.find = async (high, low, range, value) => {

    if (high == "high" && range != "") {
        if (range == "1-50") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 1
                    }
                }, {
                    price: {
                        $lte: 50
                    }
                }, {
                    type: value
                }]
            }).sort({
                price: -1
            })
            return res;
        } else if (range == "51-100") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 51
                    }
                }, {
                    price: {
                        $lte: 100
                    }
                }, {
                    type: value
                }]
            }).sort({
                price: -1
            })
            return res;
        } else {
            if (range == "101-200") {
                const res = await items.find({
                    $and: [{
                        price: {
                            $gte: 101
                        }
                    }, {
                        price: {
                            $lte: 200
                        }
                    }, {
                        type: value
                    }]
                }).sort({
                    price: -1
                })
                return res;
            }
        }
    } else if (low == "low" && range != "") {
        if (range == "1-50") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 1
                    }
                }, {
                    price: {
                        $lte: 50
                    }
                }, {
                    type: value
                }]
            }).sort({
                price: 1
            })
            return res;
        } else if (range == "51-100") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 51
                    }
                }, {
                    price: {
                        $lte: 100
                    }
                }, {
                    type: value
                }]
            }).sort({
                price: 1
            })
            return res;
        } else {
            if (range == "101-200") {
                const res = await items.find({
                    $and: [{
                        price: {
                            $gte: 101
                        }
                    }, {
                        price: {
                            $lte: 200
                        }
                    }, {
                        type: value
                    }]
                }).sort({
                    price: 1
                })
                return res;
            }
        }
    } else if (low == "" && range != "" && high == "") {
        if (range == "1-50") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 1
                    }
                }, {
                    price: {
                        $lte: 50
                    }
                }, {
                    type: value
                }]
            })
            return res;
        } else if (range == "51-100") {
            const res = await items.find({
                $and: [{
                    price: {
                        $gte: 51
                    }
                }, {
                    price: {
                        $lte: 100
                    }
                }, {
                    type: value
                }]
            })
            return res;
        } else {
            if (range == "101-200") {
                const res = await items.find({
                    $and: [{
                        price: {
                            $gte: 101
                        }
                    }, {
                        price: {
                            $lte: 200
                        }
                    }, {
                        type: value
                    }]
                })
                return res;
            }
        }
    } else if (low == "low" && range == "" && high == "") {
        const res = await items.find({
            type: value
        }).sort({
            price: 1
        })
        return res;
    } else if (low == "" && range == "" && high == "high") {
        const res = await items.find({
         type:value   
        }).sort({
            price: -1
        })
        return res;
    } else {
        const res = await items.find({
            type: value
        });
        return res;
    }
}