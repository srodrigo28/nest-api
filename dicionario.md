# Configuração Recomendada do ValidationPipe no NestJS

Essa configuração é considerada o **"padrão ouro"** para quem usa `class-validator` + `class-transformer`.  
Ela torna o NestJS muito mais **rígido**, **seguro** e **previsível**.

Pense na sua API como um **filtro de café**:  
- Sem essas opções → qualquer coisa passa  
- Com essas opções → você controla **exatamente** o que entra no seu código

## Configuração Recomendada (main.ts)

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,              // remove propriedades não declaradas no DTO
    forbidNonWhitelisted: true,   // retorna erro 400 se houver propriedades extras
    transform: true,              // converte tipos automaticamente (string → number, etc.)
  }),
);
```

## Explicação Detalhada das Propriedades

## 1. whitelist: true – O Filtro de Segurança
Por padrão, o NestJS aceita qualquer propriedade enviada pelo cliente.
Exemplo: seu DTO espera nome e email, mas o usuário envia também admin: true.
Sem whitelist, esse campo perigoso entra no seu serviço.

### O que faz:
Remove silenciosamente todas as propriedades que não possuem decorators (@IsString(), @IsNumber(), etc.) no DTO.

### Por que usar:
Protege contra ataques de Mass Assignment (tentativa de alterar campos sensíveis como isAdmin, role, password, etc.).

## 2. forbidNonWhitelisted: true – Tolerância Zero
Trabalha junto com whitelist.
O que faz:
Em vez de apenas remover os campos extras em silêncio, rejeita a requisição com erro 400 Bad Request e uma mensagem clara informando qual campo não é permitido.

### Por que usar:

Excelente para desenvolvimento: o frontend recebe feedback imediato sobre o formato esperado
Evita que o cliente envie dados inúteis ou com nomes de campos errados

## 3. transform: true – Conversão Automática
As requisições HTTP chegam como texto puro (JSON).
Sem essa opção:

"10" continua como string (mesmo que seu DTO espere number)
O objeto não é uma instância real da sua classe DTO

## O que faz:

Converte tipos primitivos automaticamente
Ex.: "42" → 42 (number), "true" → true (boolean)
Transforma o JSON simples em uma instância real da classe DTO
Isso permite usar métodos da classe, validações customizadas, etc.

## Por que usar:
Economiza muito código (não precisa fazer parseInt(), Number(), etc. manualmente)
Torna o código mais seguro e tipado.

## Resumo Rápido

### Opção,Efeito Principal,Quando usar?
<table>
  <thead>
    <tr>
      <th>Opção</th>
      <th>Efeito Principal</th>
      <th>Quando usar?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>whitelist: true</code></td>
      <td>Remove campos não declarados no DTO</td>
      <td><strong>Sempre</strong> (segurança)</td>
    </tr>
    <tr>
      <td><code>forbidNonWhitelisted: true</code></td>
      <td>Rejeita a requisição com erro 400 se houver campos extras</td>
      <td><strong>Desenvolvimento + Produção</strong></td>
    </tr>
    <tr>
      <td><code>transform: true</code></td>
      <td>Converte tipos automaticamente e cria instância do DTO</td>
      <td><strong>Quase sempre</strong> (conveniência)</td>
    </tr>
  </tbody>
</table>