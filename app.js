const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.json');

const Calculator = require('./libraries/Calculator');
const Logger = require('./libraries/Logger');

const calculatorInstance = new Calculator();
const loggerInstance = new Logger(calculatorInstance.id);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.get('/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const sum = calculatorInstance.add(num1, num2);
    loggerInstance.log(`Sum: ${sum}`);
    res.status(200).json({result: sum});
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});