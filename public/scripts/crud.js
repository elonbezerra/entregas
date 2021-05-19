var bancoDeDados = [];

const app = require('./');
var firebase = require('./firebase');

// **************** USUÁRIO ************************
/**
 * MOSTRA TODO O CARRINHO DO USUÁRIO
 */
app.get('cart/', (request, response) => {
    const { userId } = request;

    var usuario = bancoDeDados.find(user => user.userId === userId);

    // SE O USUÁRIO NÃO EXISTE/NÃO ESTÁ CADASTRADO
    if(!usuario){
        return response.status(204).json({ response : "Usuário não existe" });
    }

    // SE USUÁRIO EXISTE
    return response.status(200).json(usuario);
});

/**
 * INSERT ITEM TO CART
 */
 app.post('/addToCart/:id', (request, response) => {
    const produtoId = request.params.id;

    const itemParaAdicionar = bancoDeDados.some(produto => produto.id === produtoId);

    if(!itemParaAdicionar){
        bancoDeDados.push(itemParaAdicionar);
    }

    itemParaAdicionar.quantidade += 1;

    return response.status(201).json();
});

// **************** LOJA ***************************

/**
 * GET ALL ITEMS
 */
app.get('/', (request, response) => {
  return response.status(200).json();
});

/**
 * GET SPECIFIC ITEM
 */
app.get('/produto/:item', (request, response) => {
  const { itemId } = request.body;

  // VERIFICA SE ITEM EXISTE
  const exists = bancoDeDados.some((produto) => produto.itemId === itemId);

  // SE NÃO EXISTIR, MANDA EXCEPTION
  if (!exists) {
    return response.status(400).json({ error: 'produto não encontrado' });
  }

  // SE DER TUDO CERTO, ANDA ESSA RESPOSTA
  return response.status(200).json(exists);
  // OU
  // return response.status(200).render(`/produto/${exists.produtoId}`)
});

/**
 * INSERT ONE ITEM TO STORE
 */
app.post('/addItemToStore', (request, response) => {
  return response.status().json();
});



app.put('/', (request, response) => {
  return response.status().json();
});

/**
 * DELETE ITEM FROM STORE
 */
app.delete('/removeFromStore/:id', (request, response) => {
  return response.status().json();
});

/**
 * DELETE ITEM FROM CART
 */
app.delete('/removeFromCart/:id', (resquest, response) => {
    var id = request.params.id;

    // VERIFICA SE EXISTE NO CARRINHO

    // SE NÃO EXISTIR, MANDA ERRO

    // SE EXISTIR, APAGA

  return response.status(204).json({ result : "item apagado" });
});
