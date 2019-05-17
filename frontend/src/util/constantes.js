//LISTA DE PRODUTOS
const TITULO_PRODUTO = "Produtos Cadastrados";
const BOTAO_NOVO_PRODUTO = "Novo Produto";
const FILTRAR_PRODUTOS = "Buscar Produto";

//LISTA DE CLIENTES
const TITULO_CLIENTE = "Clientes/Fornecedores Cadastrados";
const BOTAO_NOVO_CLIENTE = "Novo Cliente/Fornecedor";
const FILTRAR_CLIENTES = "Buscar Cliente/Fornecedor";

//LISTA DE NOTAS
const TITULO_NOTAS = "Notas Cadastradas";
const BOTAO_NOVA_NOTA = "Nova Nota";
const FILTRAR_NOTA = "Buscar Nota";

//LISTA DE EMPRESAS
const TITULO_EMPRESAS = "Empresas Cadastradas"
const BOTAO_NOVA_EMPRESA = "Nova Empresa";
const BOTAO_FILTRAR_EMPRESAS = "Buscar Empresa";

//LISTA DE TRANSPORTADORES
const TITULO_TRANSPORTADOR = "Transportadores Cadastrados";
const BOTAO_NOVO_TRANSPORTADOR = "Novo Transportador";
const BOTAO_FILTRAR_TRANSPORTADOR = "Buscar Transportador";

//LISTA DE DISPOSITIVOS
const TITULO_DISPOSITIVO = "Dispositivos Cadastrados";
const BOTAO_NOVO_DISPOSITIVO = "Novo Dispositivo";
const BOTAO_FILTRAR_DISPOSITIVO = "Buscar Dispositivo";

//LISTA DE USUARIOS
const TITULO_USUARIO = "Usuários Cadastrados";
const BOTAO_NOVO_USUARIO = "Novo Usuário";
const BOTAO_FILTRAR_USUARIO = "Buscar Usuário";

//FORMULARIOS
const BOTAO_SALVAR_EDICAO = "Salvar";
const BOTAO_SALVAR_NOVO = "Cadastrar";
const BOTAO_CANCELAR = "Cancelar";

//Unidades de Medida
const UNIDADES = ["Un", "Kg", "Mt", "Lt", "Cx", "Pc"];

const ESTADOS = [{text: 'RO', value: 11},
                 {text: 'AC', value: 12},
                 {text: 'AM', value: 13},
                 {text: 'RR', value: 14},
                 {text: 'PA', value: 15},
                 {text: 'AP', value: 16},
                 {text: 'TO', value: 17},
                 {text: 'MA', value: 21},
                 {text: 'PI', value: 22},
                 {text: 'CE', value: 23},
                 {text: 'RN', value: 24},
                 {text: 'PB', value: 25}, 
                 {text: 'PE', value: 26}, 
                 {text: 'AL', value: 27},
                 {text: 'SE', value: 28},
                 {text: 'BA', value: 29},
                 {text: 'MG', value: 31},
                 {text: 'ES', value: 32},
                 {text: 'RJ', value: 33},
                 {text: 'SP', value: 35},
                 {text: 'PR', value: 41},
                 {text: 'SC', value: 42},
                 {text: 'RS', value: 43},
                 {text: 'MS', value: 50},
                 {text: 'MT', value: 51},
                 {text: 'GO', value: 52},
                 {text: 'DF', value: 53}];

const ESTADOS_NOME = [{text: 'RO', value: 'Rondônia'},
                 {text: 'AC', value: 'Acre'},
                 {text: 'AM', value: 'Amazonas'},
                 {text: 'RR', value: 'Roraima'},
                 {text: 'PA', value: 'Pará'},
                 {text: 'AP', value: 'Amapá'},
                 {text: 'TO', value: 'Tocantins'},
                 {text: 'MA', value: 'Maranhão'},
                 {text: 'PI', value: 'Piauí'},
                 {text: 'CE', value: 'Ceará'},
                 {text: 'RN', value: 'Rio Grande do Norte'},
                 {text: 'PB', value: 'Paraíba'}, 
                 {text: 'PE', value: 'Pernambuco'}, 
                 {text: 'AL', value: 'Alagoas'},
                 {text: 'SE', value: 'Sergipe'},
                 {text: 'BA', value: 'Bahia'},
                 {text: 'MG', value: 'Minas Gerais'},
                 {text: 'ES', value: 'Espírito Santo'},
                 {text: 'RJ', value: 'Rio de Janeiro'},
                 {text: 'SP', value: 'São Paulo'},
                 {text: 'PR', value: 'Paraná'},
                 {text: 'SC', value: 'Santa Catarina'},
                 {text: 'RS', value: 'Rio Grande do Sul'},
                 {text: 'MS', value: 'Mato Grosso do Sul'},
                 {text: 'MT', value: 'Mato Grosso'},
                 {text: 'GO', value: 'Goiás'},
                 {text: 'DF', value: 'Distrito Federal'}];

const ESTADOS_SIGLAS = ['RO', 'AC', 'AM', 'RR', 'PA', 'AP', 'TO', 'MA', 'PI', 
                        'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MG', 'ES', 
                        'RJ', 'SP', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF'];

const RAMO_ATIVIDADES = [{ text: 'COMÉRCIO', value: 1}, { text: 'SERVIÇOS', value: 2},  {text: 'INDÚSTRIA', value: 3}];
const REGIMES_TRIBUTARIOS = [{text: 'Simples Nacional', value: 1} , {text: 'Simples Nacional, excesso sublimite de receita bruta', value: 2}, {text: 'Regime Normal', value: 3}];
const TIPOS_NOTA = [{text: 'ENTRADA', value: 0}, {text: 'SAÍDA', value: 1}];
const NATUREZAS_ENTRADA = [{text: 'COMPRA', value: 'COMPRA'}, {text: 'CONSIGNAÇÃO', value: 'CONSIGNACAO'}, {text: 'DEVOLUÇÃO', value: 'DEVOLUCAO'}, {text: 'REMESSA P/ INDUSTRIALIZAÇÃO', value: 'REMESSA'}, {text: 'TRANSFERÊNCIA', value: 'TRANSFERENCIA'}];
const NATUREZAS_SAIDA = [{text: 'VENDA', value: 'VENDA'}, {text: 'CONSIGNAÇÃO', value: 'CONSIGNACAO'}, {text: 'DEVOLUÇÃO', value: 'DEVOLUCAO'}, {text: 'REMESSA P/ INDUSTRIALIZAÇÃO', value: 'REMESSA'}, {text: 'TRANSFERÊNCIA', value: 'TRANSFERENCIA'}];

const CFOP_ENTRADA_COMPRA = ['1102', '2102', '2403', '2556', '2551'];
const CFOP_ENTRADA_CONSIGNACAO = ["1908", "1912", "1917", "2908", "2912", "2917"];
const CFOP_ENTRADA_DEVOLUCAO = ["2411", "2202", "2204", "1202", "1204", "1411", "2553", "1553", "1209", "1918", "2209", "2918"];
const CFOP_ENTRADA_REMESSA_INDUSTRIALIZACAO = ["1415", "1904", "2415", "2904", "1554", "2554", "1555", "2555", "1906", "1907", "2906", "2907", "1909", "1913", "1914", "1916", "2909", "2913", "2914", "2916", "1915", "2915", "1925", "2925", "2949", "1949"];
const CFOP_ENTRADA_TRANSFERENCIA = ["1152", "2152", "1409", "2409", "1154", "2154", "1557", "2557", "1552", "2552"];

const CFOP_SAIDA_VENDA = ["5102", "6102", "5202", "6102", "5403", "5405", "6403", "6404", "5110", "6108", "5551", "6551", "5114", "5115", "5117", "5119", "5120", "5922", "6922", "6104", "5104", "6110", "5110", "6114", "6115", "6117", "6119", "6120", "5123", "6123"];
const CFOP_SAIDA_CONSIGNACAO = ["5917", "5908", "5909", "6908", "6909", "6917"];
const CFOP_SAIDA_DEVOLUCAO = ["5412", "5553", "6412", "6553", "5202", "6202", "5411", "6411", "5918", "5919", "5921", "5209", "6209", "6918", "6919", "6921", "5210", "6210", "5413", "6413", "6556", "5556"];
const CFOP_SAIDA_REMESSA_INDUSTRIALIZACAO = ["5904", "6905", "5905", "5415", "6904", "6415", "5910", "5911", "6910", "6911", "5912", "5913", "5914", "5915", "5916", "6912", "6913", "6914", "6915", "6916", "5554", "6554", "5555", "6555", "5927", "5928", "5929", "5949", "6929", "6949", "5206", "6206", "5603", "5606", "6603"];
const CFOP_SAIDA_TRANSFERENCIA = ["5409", "6409", "5557", "6557", "5552", "6552"];


const VERSAO_NFE = ['4.00'];
const AMBIENTES = [{text: 'HOMOLOGAÇÃO', value: 2}, {text: 'PRODUÇÃO', value: 1}];
const TIPOS_CERTIFICADO = [{text: 'A1 (Arquivo)', value: 'A1'}, {text: 'A3 (Cartão)', value: 'A3'}];

const FORMA_PAGAMENTO = [{text: 'A VISTA', value: 0}, {text: 'A PRAZO', value: 1}, {text: 'OUTRAS', value: 2}];
const PRAZO = [30, 60, 90];
const PARCELAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const NIVEIS_ACESSO = ['ADMINISTRADOR', 'NORMAL'];

const ORIGEM_PRODUTO = [{text: 'Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8', value: 0}, {text: 'Estrangeira - Importação direta, exceto a indicada no código 6', value: 1}, {text: 'Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7', value: 2}, {text: 'Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%', value: 3}, {text: 'Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes', value: 4}, {text: 'Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%', value: 5}, {text: 'Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural', value: 6}, {text: 'Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural', value: 7}, {text: 'Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%', value: 8}];
const MODALIDADE_BC_ICMS = [{text: 'Margem Valor Agregado (%)', value: 0}, {text: 'Pauta (Valor)', value: 1}, {text: 'Preço Tabelado Máx. (Valor)', value: 2}, {text: 'Valor da Operação', value: 3}]
const MODALIDADE_BC_ICMS_ST = [{text: 'Preço tabelado ou máximo sugerido', value: 0}, {text: 'Lista Negativa (Valor)', value: 1}, {text: 'Lista Positiva (Valor)', value: 2}, {text: 'Lista Neutra (Valor)', value: 3}, {text: 'Margem Valor Agregado (%)', value: 4}, {text: 'Pauta (Valor)', value: 5}];
const FINALIDADE_NFE = [{text: 'NF-e normal', value: 1}, { text: 'NF-e complementar', value: 2}, { text: 'NF-e de ajuste', value: 3}, { text: 'Devolução de mercadoria', value: 4 }];
const INDICADOR_PRESENCA = [{text: 'Não se aplica(ex: notas complementares ou de ajuste)', value: 0}, {text: 'Operação presencial', value: 1}, {text: 'Operação não presencial, pela Internet', value: 2}, {text: 'Operação não presencial, Teleatendimento', value: 3}, {text: 'NFC-e em operação com entrega a domicílio', value: 4}, {text: 'Operação não presencial, outros.', value: 9}];
const FORMATO_IMPRESSAO = [{text: 'Sem geração de DANFE', value: 0}, {text: 'DANFE normal, Retrato', value: 1}, {text: 'DANFE normal, Paisagem', value: 2}, {text: 'DANFE Simplificado', value: 3}, {text: 'DANFE NFC-e', value: 4}, {text: 'DANFE NFC-e em mensagem eletrônica', value: 5}]; 
const MODELO_FRETE = [{text: 'Emitente', value: 0}, {text: 'Dest/Rem', value: 1}, {text: 'Por conta de terceiros', value: 2}, {text: 'Sem frete', value: 9}];
const CSOSN = [{text: '101 - Tributada pelo Simples Nacional com permissão de crédito', value: 101}, {text: '102 - Tributada pelo Simples Nacional sem permissão de crédito', value: 102}, {text: '103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta', value: 103}, {text: '201 - Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária', value: 201}, {text: '202 - Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária', value: 202}, {text: '203 -  Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária', value: 203}, {text: '300 - Imune', value: 300}, {text: '400 - Não tributada pelo Simples Nacional', value: 400}, {text: '500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação', value: 500}, {text: '900 - Outros', value: 900}];

//manifesto de documentos
const MODALIDADES = [{text: 'Rodoviário', value: 1}, {text: 'Aéreo', value: 2}, {text: 'Aquaviário', value: 3}, {text: 'Ferroviário', value: 4}];
const TIPO_EMITENTE = [{text: 'Prestador de Serviço de Transporte', value: 1}, {text: 'Transportador de Carga Própria', value: 2}]
const TIPO_CARROCERIA = [{text: 'Não Aplicável', value: '00'}, {text: 'Aberta', value: '01'}, {text: 'Fechada/Baú', value: '02'}, {text: 'Granelera', value: '03'}, {text: 'Porta Container', value: '04'}, {text: 'Sider', value: '05'}];
const TIPO_RODADO = [{text: 'Truck', value: '01'}, {text: 'Toco', value: '02'}, {text: 'Cavalo Mecânico', value: '03'}, {text: 'VAN', value: '04'}, {text: 'Utilitário', value: '05'}, {text: 'Outros', value: '06'}];
const TIPO_PROPRIETARIO = [{text: 'TAC - Agregado', value: 0}, {text: 'TAC - Independente', value: 1}, {text: 'Outros', value: 2}];

const STATUS_AUTORIZADA = 'Autorizada';
const STATUS_DENEGADA = 'Denegada';
const STATUS_INUTILIZADA = 'Inutilizada';
const STATUS_PROCESSAMENTO = 'Processando';
const STATUS_ERRO = 'Erro';
const STATUS_CANCELADA = 'Cancelada';
const STATUS_ENCERRADO = 'Encerrado';

const MANIF_CONFIRMACAO = 'CONFIRMACAO';
const MANIF_CIENCIA = 'CIENCIA';
const MANIF_DESCONHECIMENTO = 'DESCONHECIMENTO';
const MANIF_NAO_REALIZADA = 'NAO_REALIZADA';

const LOGO_PADRAO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf8AAAINCAMAAAAHnYYDAAAAAXNSR0IB2cksfwAAAUdQTFRFAAAAIVszf7oAka2ZXIdQSnlLWINPIl00Z5FOd6NAQnNINWlAQHJGaZNOf7oCeKU+KWE5MGY+LGM7J183eqY7N2tBgLgKf7EkJF02gLcQTn1NtLS0Un9OZY9Pf7oEVYJPWYVPgLUWapRNfq4tYo1PgLUZcJtJPG5ETHtMf7kHRnZJcp1HdqJCfawwgLgNM2hAXolPbJdMdJ9FPnBGQ3RIfKszbplKfKo2u83BfrAoYYtQe6g4f7QdgLcTf7IgSHdKYYtuOW1DJ2A5OW1JI101LWQ+19fXaZF14ubiMmdCiKaRgaKL4+PjKmI8ka2aep2EP3FOTXxccZZ8uLi4oLqprMKyXodq5+rnp76uytjOsMS22+Pj5evmR3dWpLyrxtXLVYJjztfOtsq87+/vv9HGWIRmnLak0NnVlrCdUH1e1eHb6+vr0dvWh7ASTQAAAG10Uk5TAP//f///////////////////////////////Af////////////////////////////////////9M/////////7T/9+P78AasHuuIkAn0fZncy6IEa1+5FWM7WiQa02dAwjlSEEa+cTV4yCsNMgQRor8AABSOSURBVHic7Z3nQ9tIE4dl4pwhAYMrxphmTC+h95ree3Jpl16uvP//59fmMJcAljXy7I529/d8R5qdx2hXs0WeF5i/X9z7dicGIs6Dvx49//QsuNZAPPt677F0w0Bw7jz9fJ/P/qenN6QbBKhcPdjo55B/88UT6aaAcDz+/qVV+/cfoss3mAf3fm/Ffv+ra9ItAK1x42H4gcDXP6SjB61z7UW4ccCXp9KRAx6+3Q6hfwOPfmu48Ypq/59H0jEDTg7ekfS/Rc9vGdd+EPR/wEufdVx9E1j/86vSwQIF3A34HnBPOlCghluBpoWg31pu3Wxqvx8Df4s5aPYD6EfRx2peNqkG4+FvObd8B4HPpcMDqrnro3/junR0QDnvG+r/8UA6NqCe618b6P+CJX5OcKfBXMAt6cCAHj6eOwZ8Lx0W0MXDc/T/jc7fGa6/PqO/H6t8HeLxmTog3vyd4sIp/b9jh4dTXH37q3+U/R3j5S/6P0mHA3Sz8bP/l9LRAN08+Un/a+lggH42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';

const DINHEIRO = 'Dinheiro';
const CARTAO = 'Cartão';
const CHEQUE = 'Cheque';
const DEPOSITO = 'Depósito';
const DUPLICATA = 'Duplicata';

const FORMAS_PAGAMENTO = [
  {text: 'Dinheiro', value: DINHEIRO},
  {text: 'Cartão', value: CARTAO},
  {text: 'Cheque', value: CHEQUE},
  {text: 'Depósito', value: DEPOSITO},
]

const FILTRO_CONTAS = [
  {text: 'Cartão', value: CARTAO},
  {text: 'Cheque', value: CHEQUE},
  {text: 'Depósito', value: DEPOSITO},
  {text: 'Duplicata', value: DUPLICATA},
]

//status de cheques
const EM_CAIXA = 'Em Caixa';
const COMPENSADO = 'Compensado';
const REPASSADO = 'Repassado';
const DEVOLVIDO = 'Devolvido';
const DEVOLVIDO_PAGO = 'Devolvido Pago';

//tipo de Participante cadastrado
const CLIENTE = 'Cliente';
const FORNECEDOR = 'Fornecedor';
const CLIENTE_FORNECEDOR = 'Cliente e Fornecedor'

const CST_ICMS = [{text: '000 - Tributada Integralmente', value: '000'},
                  {text: '010 - Tributada e com cobrança do ICMS por substituição tributária', value: '010'},
                  {text: '020 - Com redução de base de cálculo', value: '020'},
                  {text: '030 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária', value: '030'},
                  {text: '040 - Isenta', value: '040'},
                  {text: '041 - Não tributada', value: '041'},
                  {text: '050 - Suspensão', value: '050'},
                  {text: '051 - Diferimento', value: '051'},
                  {text: '060 - ICMS cobrado anteriormente por substituição tributária', value: '060'},
                  {text: '070 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária', value: '070'},
                  {text: '090 - Outras', value: '090'}];

//ÍNDICE DE ARREDONDAMENTO OU TRUCAMENTO
const IATs = [{text: 'Trucamento', value: 'T'}, {text: 'Arredondamento', value: 'A'}];

// INDICADOR DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS
const IPPTs = [{text: 'Terceiros', value: 'T'}, {text: 'Própria', value: 'P'}];

const SANGRIA = 'Sangria';
const SUPRIMENTO = 'Suprimento';

const DEBITO = 'Débito';
const CREDITO = 'Crédito';

export default  {
  TITULO_PRODUTO,
  BOTAO_NOVO_PRODUTO,
  FILTRAR_PRODUTOS,
  TITULO_CLIENTE,
  BOTAO_NOVO_CLIENTE,
  FILTRAR_CLIENTES,
  TITULO_NOTAS,
  BOTAO_NOVA_NOTA,
  FILTRAR_NOTA,
  TITULO_EMPRESAS,
  TITULO_TRANSPORTADOR,
  TITULO_DISPOSITIVO,
  TITULO_USUARIO,
  BOTAO_NOVO_USUARIO,
  BOTAO_FILTRAR_USUARIO,
  BOTAO_NOVO_DISPOSITIVO,
  BOTAO_FILTRAR_DISPOSITIVO,
  BOTAO_NOVO_TRANSPORTADOR,
  BOTAO_FILTRAR_TRANSPORTADOR,
  BOTAO_NOVA_EMPRESA,
  BOTAO_FILTRAR_EMPRESAS,
  BOTAO_SALVAR_EDICAO,
  BOTAO_SALVAR_NOVO,
  BOTAO_CANCELAR,
  UNIDADES,
  ESTADOS,
  ESTADOS_SIGLAS,
  ESTADOS_NOME,
  RAMO_ATIVIDADES,
  REGIMES_TRIBUTARIOS,
  TIPOS_NOTA,
  NATUREZAS_ENTRADA,
  NATUREZAS_SAIDA,
  CFOP_ENTRADA_COMPRA,
  CFOP_ENTRADA_CONSIGNACAO,
  CFOP_ENTRADA_DEVOLUCAO,
  CFOP_ENTRADA_REMESSA_INDUSTRIALIZACAO,
  CFOP_ENTRADA_TRANSFERENCIA,
  CFOP_SAIDA_VENDA,
  CFOP_SAIDA_CONSIGNACAO,
  CFOP_SAIDA_DEVOLUCAO,
  CFOP_SAIDA_REMESSA_INDUSTRIALIZACAO,
  CFOP_SAIDA_TRANSFERENCIA,
  VERSAO_NFE,
  AMBIENTES,
  TIPOS_CERTIFICADO,
  PRAZO,
  PARCELAS,
  FORMA_PAGAMENTO,
  NIVEIS_ACESSO,
  ORIGEM_PRODUTO,
  MODALIDADE_BC_ICMS,
  MODALIDADE_BC_ICMS_ST,
  FINALIDADE_NFE,
  INDICADOR_PRESENCA,
  FORMATO_IMPRESSAO,
  MODELO_FRETE,
  CSOSN,
  MODALIDADES,
  TIPO_EMITENTE,
  TIPO_CARROCERIA,
  TIPO_RODADO,
  TIPO_PROPRIETARIO,
  STATUS_AUTORIZADA,
  STATUS_DENEGADA,
  STATUS_INUTILIZADA,
  STATUS_PROCESSAMENTO,
  STATUS_ERRO,
  STATUS_CANCELADA,
  STATUS_ENCERRADO,
  MANIF_CONFIRMACAO,
  MANIF_CIENCIA,
  MANIF_DESCONHECIMENTO,
  MANIF_NAO_REALIZADA,
  LOGO_PADRAO,
  FORMAS_PAGAMENTO,
  EM_CAIXA,
  COMPENSADO,
  REPASSADO,
  DEVOLVIDO,
  DEVOLVIDO_PAGO,
  CLIENTE,
  FORNECEDOR,
  CLIENTE_FORNECEDOR,
  CST_ICMS,
  IATs,
  IPPTs,
  DINHEIRO,
  CARTAO,
  CHEQUE,
  DEPOSITO,
  DUPLICATA,
  FILTRO_CONTAS,
  SANGRIA,
  SUPRIMENTO,
  CREDITO,
  DEBITO
};