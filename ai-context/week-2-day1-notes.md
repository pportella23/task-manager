# Week 2 — Day 1 study notes

## useReducer

Ganha do `useState` quando há lógica complexa para tratar, ou muitas atualizações diferentes em um ou mais estados de um mesmo componente. Permite separar e isolar a lógica fora do componente (ou até do arquivo).

Funciona com o padrão de dispatch de uma action que é identificada dentro de um switch (ou if) para executar as alterações de estado. Nunca sobrescrever a variável diretamente — sempre retornar um novo valor usando spread operator para clonar o estado anterior e incluir a mudança.

Bônus: reducer puro pode ser testado em isolamento, sem montar componente.

## useMemo

Armazena em cache o resultado de um cálculo ou operação e mantém o mesmo resultado sem recalcular, até que alguma das variáveis mapeadas no array de dependências mude.

## useCallback

Faz o mesmo que o `useMemo`, mas para a definição/assinatura de funções — mantém a mesma referência de função entre renders até que uma dependência mude.

**Regra importante:** `useCallback` sozinho não evita re-render de componentes filhos. Para isso funcionar, o filho precisa estar envolvido em `React.memo`. Sem `React.memo` no filho, `useCallback` no pai não faz nada em termos de performance — é otimização imaginária.

## useRef

A diferença para o `useState`: atualizar o valor de um ref **não causa re-render** do componente.

Dois casos de uso:
1. Acesso direto a um elemento do DOM
2. Persistir um valor entre renders sem disparar re-render — ex: timer ID, valor anterior, flag "já executou"

Diferente de uma variável local, que é recriada a cada render.

## Actions planejadas para o reducer

```ts
type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; id: string }
  | { type: 'UPDATE_STATUS'; id: string; status: TaskStatus }
  | { type: 'SET_FILTER'; filter: TaskFilter }
```

## Custom hooks planejados

| Hook | Input | Output |
|---|---|---|
| `useLocalStorage<T>` | `key: string`, `initialValue: T` | `[T, (value: T) => void]` |
| `useDebounce<T>` | `value: T`, `delay: number` | `T` |
| `usePrevious<T>` | `value: T` | `T \| undefined` |
