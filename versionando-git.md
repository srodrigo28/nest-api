# As tags funcionam como "marcos" na história do seu projeto, sendo usadas quase exclusivamente para marcar pontos de Release (v1.0.0, v2.1.0, etc.).

> * Aqui está um guia rápido de como usar para o seu objetivo:

## 1. Criar uma Tag Anotada (Recomendado para Versões)

> * Existem dois tipos de tags, mas para releases, sempre use as anotadas (-a), pois elas guardam quem criou, a data e uma mensagem descritiva.
```
git tag -a v2.0.0 -m "Release Prisma ORM Crud"
```

## 2. Enviar a Tag para o GitHub
Diferente dos commits, as tags não são enviadas automaticamente quando você dá git push. Você precisa enviá-las explicitamente:

> * Enviar uma tag específica:
```
git push origin v2.0.0
```

> * Enviar todas as tags locais de uma vez:

```
git push origin --tags
```

### Como isso aparece no GitHub?

> * Assim que você faz o push da tag:
> * O GitHub cria automaticamente um arquivo .zip e .tar.gz do seu código naquele estado.
> * A tag aparece na aba "Releases" ou "Tags" do repositório.
> * Você pode clicar em "Create release from tag" no GitHub para adicionar um changelog (lista de mudanças) e anexar arquivos binários (como um .exe ou .apk).


## Listar todas as tags:

```
git tag
```
### Ver detalhes de uma tag específica (mensagem e data):

```
git show v2.0.0
```

## Excluir uma tag local (se você errou o nome):

```
git tag -d v1.0.0
```
### Excluir uma tag do servidor (GitHub):

```
git push origin --delete v1.0.0
```