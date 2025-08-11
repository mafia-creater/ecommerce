const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, drop, images, countInStock } = req.body;

        const product = new Product({
            name,
            description,
            price,
            category,
            sizes,
            drop,
            images,
            countInStock
        });

        const createdProduct = await product.save();
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error: Could not fetch products", error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            // Use a 404 status code for 'Not Found'
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, drop, images, countInStock } = req.body;
        const product = await Product.findById(req.params.id);
    
        if(product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.sizes = sizes || product.sizes;
            product.drop = drop || product.drop;
            product.images = images || product.images;
            product.countInStock = countInStock !== undefined ? countInStock : product.countInStock;

            const updatedProduct = await product.save();
            res.json(updateProduct);
        }else{
            res.status(404).json({ message: 'Product not found' });
        }
    }catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
    
}

const deleteProduct = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);

        if(product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }catch (error){
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};



module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};