import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('emodi-inserter.inserterEmoji', () => {
        // Логика вставки смайлика
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.insertSnippet(new vscode.SnippetString('😵'));
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
