export class ViewProdutoEmpresa {
  mostrar_foto: boolean = false;
  imagem: string = 'assets/icon/favicon.png';
  descricao: string;
  referencia: string;
  codigo_original: string;
  gtin: string;
  sub_grupo: string;
  grupo: string;
  fabricante: string;
  aplicacao: string;
  unidade: string;
  invalidades: string[];
  id: number;
  id_erp: number;
  id_produto: number;
  id_produto_erp: number;
  id_produto_grupo: number;
  id_produto_grupo_erp: number;
  id_produto_sub_grupo: number;
  id_produto_sub_grupo_erp: number;
  id_produto_fabricante: number;
  id_produto_fabricante_erp: number;
  tipo_alteracao_preco: number;
  id_empresa: number;
  pcusto: number;
  pvenda_atacado: number;
  pvenda_super_atacado: number;
  pcompra: number;
  pfornecedor: number;
  saldo_total: number;
  pvenda_varejo: number;
  movimenta_fracionado: boolean;
  nao_calcula_saldo_flex: boolean;
  desconto_maximo_varejo_vlr: number;
  desconto_maximo_atacado_vlr: number;
  desconto_maximo_super_atacado_vlr: number;
  desconto_maximo_varejo_prc: number;
  desconto_maximo_atacado_prc: number;
  desconto_maximo_super_atacado_prc: number;
  quantidade_minima_atacado: number;
  quantidade_minima_super_atacado: number;
  //campos auxiliar para a venda
  icms_st?: number;
  ipi?: number;
  desconto_suframa?: number;
  quantidade?: number;
  quantidade_adicionada?: number;
  valor_unitario?: number;
  valor_unitario_original?: number;
  total_bruto?: number;
  total_liquido?: number;
  desconto_vlr?: number;
  desconto_prc?: number;
  acrescimo_vlr?: number;
  frete_vlr?: number;
  acrescimo_prc?: number;
  desconto_maximo?: number;
  desconto_maximo_prc?: number;
  id_tabela_preco?: number;
  id_promocao?: number;
  preco_unitario_original_flex?: number;
  preco_unitario_vendido_flex?: number;
  saldo_flex_unitario?: number;
  tipo_preco?: string;
  observacao: string;
  alterou_valor_manualmente?: boolean;
  valor_liquido?: number;
  //validação que não foram supridas, ex: desconto inválido
  /**
   *
   */
  constructor() {
    this.quantidade =
      this.valor_unitario =
      this.total_bruto =
      this.total_liquido =
      this.desconto_vlr =
      this.desconto_prc =
      this.acrescimo_vlr =
      this.acrescimo_prc =
      this.frete_vlr =
        0;
  }
}
