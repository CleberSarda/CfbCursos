from PyQt5.QtWidgets import QApplication, QLabel
import sys

app = QApplication(sys.argv)
label = QLabel('Teste PyQt5')
label.show()
sys.exit(app.exec_())
