
frappe.ui.form.ControlTextEditor = class ControlTextEditor extends frappe.ui.form.ControlCode {
    make_wrapper() {
        super.make_wrapper();
    }

    make_input() {
        this.has_input = true;
        this.make_quill_editor();
    }

    make_quill_editor() {
        // if (this.quill) return;
        // this.quill = new Quill(this.quill_container[0], this.get_quill_options());
        // this.bind_events();
        const that = this
        this.quill_container = $('<div>').appendTo(this.input_area);
        tinymce.init({
            target: this.input_area,
            toolbar: 'undo redo | formatselect styleselect fontsizeselect | bold italic underline strikethrough forecolor backcolor subscript superscript | alignleft aligncenter alignright alignjustify | bullist numlist table image | outdent indent | link hr removeformat | html fullscreen help',
            fontsize_formats: '10px 11px 12px 14px 15px 16px 18px 24px 36px',
            plugins: [
              'autoresize', 'autolink', 'charmap', 'emoticons', 'fullscreen', 'help',
              'hr', 'image', 'imagetools', 'link', 'lists', 'paste', 'searchreplace',
              'table', 'visualblocks', 'visualchars', 'wordcount',
            ],
            entity_encoding: 'raw',
            convert_urls: true,
            content_css: false,

            setup: function(editor) {
                that.editor_id = editor.id
                editor.on('EditorChange', function(e) {
                    that.parse_validate_and_set_in_model(e.level.content);
                });
                editor.on('init', function (e) {
                    editor.setContent(that.value);
                });
            }
        });
        this.activeEditor = tinymce.activeEditor
    }

    set_formatted_input(value){
        if(this.activeEditor){
            if(value){
                this.activeEditor.setContent(value)
            }else{
                this.activeEditor.setContent("")
            }
        }
    }
}
