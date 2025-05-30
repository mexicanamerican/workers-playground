export default {
  questions: [
    {
      id: "r1",
      question: "MCPにおけるリソースとは何を指しますか？",
      options: [
        "サーバーのCPUやメモリ使用状況",
        "言語モデルに提供する文脈となるデータ",
        "クライアントの接続情報",
        "プロトコルのバージョン情報",
      ],
      correctAnswer: 1,
      explanation:
        "MCPにおけるリソースとは、言語モデルに文脈を提供するためにサーバーがクライアントに公開するデータを指します。例えば、ファイル、データベーススキーマ、アプリケーション固有の情報などです。",
    },
    {
      id: "r2",
      question: "MCPのリソースがサポートする2つのオプション機能は何ですか？",
      options: [
        "listChanged と subscribe",
        "read と write",
        "create と delete",
        "open と close",
      ],
      correctAnswer: 0,
      explanation:
        "リソース機能は2つのオプション機能をサポートします：1) subscribe（クライアントが個別のリソースの変更通知を受け取れるかどうか）、2) listChanged（サーバーが利用可能なリソースのリストが変更されたときに通知を送信するかどうか）。",
    },
    {
      id: "r3",
      question: "MCPのリソースはどのように一意に識別されますか？",
      options: ["IDで", "名前と説明で", "URIで", "MIMEタイプで"],
      correctAnswer: 2,
      explanation:
        "MCPでは、各リソースはURI（Uniform Resource Identifier）によって一意に識別されます。",
    },
    {
      id: "r4",
      question: "MCPのリソース定義に含まれる必須情報はどれですか？",
      options: [
        "URI、名前、説明、MIMEタイプ",
        "URI、名前、MIMEタイプ、サイズ",
        "URIのみ",
        "URI、名前、説明、サイズ",
      ],
      correctAnswer: 2,
      explanation:
        "リソース定義には少なくともURIが含まれている必要があります。名前、説明、MIMEタイプ、サイズはオプションです。",
    },
    {
      id: "r5",
      question:
        "MCPのリソース内容で、バイナリデータはどのように表現されますか？",
      options: [
        "16進数文字列として",
        "Base64でエンコードされた文字列として",
        "UTF-8文字列として",
        "バイト配列として",
      ],
      correctAnswer: 1,
      explanation:
        "バイナリデータはBase64でエンコードされた文字列として表現されます。例えば、画像リソースの内容などです。",
    },
    {
      id: "r6",
      question:
        "MCPのリソースが利用できないときに返されるべきJSON-RPCエラーコードは何ですか？",
      options: ["-32000", "-32001", "-32002", "-32603"],
      correctAnswer: 2,
      explanation:
        "リソースが見つからない場合、サーバーは標準のJSON-RPCエラーコード -32002 を返すべきです。",
    },
    {
      id: "r7",
      question: "MCPのリソーステンプレートはどのように定義されますか？",
      options: [
        "正規表現を使用して",
        "URIテンプレートを使用して",
        "JSONスキーマを使用して",
        "XMLテンプレートを使用して",
      ],
      correctAnswer: 1,
      explanation:
        "リソーステンプレートはURIテンプレート（RFC6570）を使用してパラメータ化されたリソースを定義します。",
    },
    {
      id: "r8",
      question:
        "MCPのリソースリストが変更されたとき、どのような通知が送信されますか？",
      options: [
        "resources/changed",
        "notifications/resources/list_changed",
        "resources/list_updated",
        "resources/notification/changed",
      ],
      correctAnswer: 1,
      explanation:
        "利用可能なリソースのリストが変更されたとき、listChanged機能を宣言したサーバーは 'notifications/resources/list_changed' 通知を送信すべきです。",
    },
    {
      id: "r9",
      question: "MCPのリソース購読機能（subscribe）の目的は何ですか？",
      options: [
        "リソースの内容を連続的にストリーミングする",
        "リソースが変更されたときに通知を受け取る",
        "リソースへの書き込み権限を得る",
        "複数のリソースを一度に取得する",
      ],
      correctAnswer: 1,
      explanation:
        "subscribe機能を使用すると、クライアントは特定のリソースを購読し、それらが変更されたときに通知を受け取ることができます。",
    },
    {
      id: "r10",
      question:
        "MCPで推奨されているディレクトリリソースのMIMEタイプは何ですか？",
      options: [
        "directory/folder",
        "application/directory",
        "inode/directory",
        "text/directory",
      ],
      correctAnswer: 2,
      explanation:
        "MCPサーバーはディレクトリなどの通常ファイル以外のものを表現するためにXDG MIMEタイプ（例：inode/directory）を使用することができます。",
    },
    {
      id: "r11",
      question: "MCPのリソースリストリクエストがサポートする機能はどれですか？",
      options: [
        "キャッシング",
        "ページネーション",
        "フィルタリング",
        "ソーティング",
      ],
      correctAnswer: 1,
      explanation:
        "resources/listリクエストはページネーションをサポートしています。次のページを取得するためにカーソルを使用できます。",
    },
    {
      id: "r12",
      question:
        "MCPのリソースのURIスキームとして標準化されていないものはどれですか？",
      options: ["file://", "https://", "git://", "database://"],
      correctAnswer: 3,
      explanation:
        "標準のURIスキームには file://, https://, git:// などが含まれますが、database:// は標準URIスキームとして明示的に定義されていません。実装は追加のカスタムURIスキームを自由に使用できます。",
    },
    {
      id: "r13",
      question: "MCPのリソース読み取りレスポンスには何が含まれますか？",
      options: [
        "URIと内容のみ",
        "URI、MIMEタイプ、内容",
        "名前と内容のみ",
        "URI、名前、説明、内容",
      ],
      correctAnswer: 1,
      explanation:
        "リソース読み取りレスポンスには、URI、MIMEタイプ、およびテキストまたはバイナリのいずれかの内容が含まれます。",
    },
    {
      id: "r14",
      question:
        "MCPのリソースに対するセキュリティ上の考慮事項として重要でないものはどれですか？",
      options: [
        "すべてのリソースURIを検証する",
        "センシティブなリソースに対するアクセス制御を実装する",
        "リソースの暗号化を常に適用する",
        "バイナリデータを適切にエンコードする",
      ],
      correctAnswer: 2,
      explanation:
        "すべてのリソースに対する暗号化の適用は明示的に必須とされていません。重要なのは、URIの検証、アクセス制御の実装、バイナリデータの適切なエンコードなどです。",
    },
    {
      id: "r15",
      question:
        "MCPにおけるリソース機能のユーザーインタラクションモデルはどのように設計されていますか？",
      options: [
        "ユーザー主導型",
        "アプリケーション主導型",
        "モデル主導型",
        "システム主導型",
      ],
      correctAnswer: 1,
      explanation:
        "リソースはアプリケーション主導型に設計されており、ホストアプリケーションがニーズに基づいてコンテキストをどのように組み込むかを決定します。プロトコル自体は特定のユーザーインタラクションモデルを強制しません。",
    },
  ],
};
