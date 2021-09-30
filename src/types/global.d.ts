type RenderQueryProps<TResponse> = {
  props: TResponse | null;
  error: Error | null;
  retry: VoidFunction | null;
};

type Post = {
  readonly id: string | null;
  readonly title: string | null;
  readonly body: string | null;
} | null;

type PostInputs = {
  title: string;
  body: string;
};

type TodoInputs = {
  title: string;
  completed?: boolean;
};

type Todo = {
  readonly id: string | null;
  readonly title: string | null;
  readonly completed: boolean | null;
  readonly user: {
    readonly name: string | null;
  } | null;
} | null;
