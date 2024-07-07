from flask import Flask # type: ignore
app=Flask(__name__)
@app.route('/home')
def execute():
    return "Hello"

if __name__=='__main__':
    app.run(host='0.0.0.0', port=3005)