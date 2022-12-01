class Geladeira:
  def __init__(self, cor, potencia, voltagem, preco):
    self.preco = preco
    self.__cor = cor
    self.__potencia = potencia
    self.__voltagem = voltagem
    self.__ligado = False
    self.__amperagem_atual_no_motor = 0
  
  @property
  def cor(self):
    return self.__cor
  
  @cor.setter
  def cor(self, nova_cor):
    self.__cor = nova_cor

  def __str__(self):
    return f"""
    Sobre a geladeira:
    - A cor da geladeira é {self.__cor}
    - A potência da geladeira é {self.__potencia}
    - A voltagem da geladeira é {self.__voltagem}
    - A geladeira está ligada? {self.__ligado}
    - O preço da geladeira é R$ {self.preco}
    """

geladeira_1 = Geladeira("Branca", "220", "254", 1000)

print(geladeira_1)

class Pessoa: 
  def __init__(self, nome, saldo_na_conta):
    self.nome = nome
    self.saldo_na_conta = saldo_na_conta
    self.geladeira = None

  def comprar_geladeira(self, geladeira: Geladeira):
    if geladeira.preco <= self.saldo_na_conta:
      self.saldo_na_conta -= geladeira.preco
      self.geladeira = geladeira

  def __str__(self):
    return f"""
    Sobre a pessoa:
    - Meu nome é {self.nome}, eu tenho R$ {self.saldo_na_conta}.
    {"Eu não tenho uma geladeira" if self.geladeira == None else "Hoje eu comprei uma geladeira"}
    """

pessoa_1 = Pessoa('João Paulo', 2500)

print(pessoa_1)
