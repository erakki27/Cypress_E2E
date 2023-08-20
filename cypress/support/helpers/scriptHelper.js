
class ScriptHelper {

    generateRandomString(stringType, stringLength) {

        var characters = ""
        var result = ''

        if (stringType === 'numeric') {
            characters = '123456789'
        }
        else if (stringType === 'alphabetic') {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        }
        else if (stringType === 'alphanumeric') {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
        }
        else if (stringType === 'multibyte') {
            characters = 'This is a sample text这是一个示例文本هذا نموذج نصЭто образец текстаQuestoèun testodiesempio이것은 샘플 텍스트입니다これはサンプルテキストですĐâylàmộtvănbảnmẫuזהוטקסלדוגמאáÁàÀâÂäÄãÃåÅæÆçÇéÉèÈêÊëËíÍìÌîÎïÏñÑóÓòÒôÔöÖõÕøØœŒßúÚùÙûÛüÜ~!@#$%^&*()_+`{}|:"<>?-=[]\;\',./'
        }
        else {
            throw new Error('Invalid argument passed to generateRandomString helper')
        }

        var charactersLength = characters.length
        for (var i = 0; i < stringLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

}

export default ScriptHelper