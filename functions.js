const symbolReplacements = [
    { symbol: '√', replacement: 'Math.sqrt' },
    { symbol: '²', replacement: '**2'},
    { symbol: 'sin', replacement: 'Math.sin'},
    { symbol: 'cos', replacement: 'Math.cos'},
    { symbol: 'tan', replacement: 'Math.tan'}
];

function closingParethesis(output){
        let openParenthesesCount = (output.match(/\(/g) || []).length;
        for (let i = 0; i < openParenthesesCount; i++) {
            output += ')';
        }
        return output;
}


function replaceSymbols(expression) {
    symbolReplacements.forEach(replacement => {
        expression = expression.replace(replacement.symbol, replacement.replacement);
    });
    return expression;
}
function addToOutput(value){
    var output = document.getElementById('output');
    if(value === '='){
        try{
            output.value = replaceSymbols(output.value);
            output.value = closingParethesis(output.value);
            output.value = eval(output.value);
        }
        catch(error){
            output.value = 'Error';
        }
    }
    else if(value === "+" || value === '-' || value === '*' || value === '/'){
        output.value += value;
    }
    else if(value === "π"){
        output.value += Math.PI;
    }
    else if (value === 'x²') {
        output.value += output.value + `²`;
    }   
    else if (value === '√') {
        output.value += '√(';
    }
    else if(value === 'sin' || value === 'cos' || value === 'tan'){
        output.value = value + '(';
    }
    else if(value === '&lpar'){
        output.value += '('
    }
    else if(value === '&rpar'){
        output.value += ')'
    }
    else{
        output.value += value;
    }
}

function clearOutput(){
    document.getElementById('output').value = '';
}

