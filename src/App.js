import React, { Component, useState} from 'react';
/**+-(4)-React Hooks:_Importar "useState", el Hook que nos va a permitir usar Los Estados en los Componentes-Función más Abajo, ir abajo para Seguir Aprendiendo.*/
import './App.css';

/** +-(1)-Para Crear un Componente de React.js 16(Lo Cual es múy Útil para Reutilizar el Código de ese Componnte y que es la razón de Existir de React.js 16), Creamos una Función CON NOMBRE 
 * ya sea Una Función Tradicional dentro del cual creamos un "return (***);" donde los "***" es el Código JSX que va a mostrar el Componente en Sí, Una Función Flecha de JS ES6 en Forma de
 * una Constante CON NOMBRE cuyo valor es la Función Flecha en sí dentro cuyo Código se Encuentra en Código JSX o una Clase que se Extiende de React.Component(Así Hereda las Características de 
 * Un Componente Normal de React.js) dentro de la Cual se usa el Método-Función "render() { return ***; }" donde los "***" es el Código JSX.
 * NOTA: Al Retornar el Código JSX en Un Componente deben estar todos los Elementos HTML(JSX) dentro del UN MISMO ELEMENTO PADRE, por lo que se DEBE Siempre Primero Crear un 
 * <div> dentro del Cual Escribir todo lo demás.*/

function HelloWorld() {
  return (
    <div id="hello">Hello World</div>
  );
}

class ByeByeWorld extends React.Component {
  render() {
    return <div>Bye Bye World</div>;
  }
}

/**+-(2)-Las Props(Propiedades) de los Componentes en React.js 16 actúan como Los Atributos de los Elementos HTML:_ Sirven para que un mismo Componente al Invocarlo varias veces Pero 
 * Ingresándole Distintos Parámetros(Como a una Función de JS) se presente de distintas Formas, LAS PROPS SON DATOS QUE NO VARÍAN UNA VEZ RENDERIZADAS.
 * Las Props se Utilizan en Forma de Objetos de JS Poniendo "props" como Parámetro a La Función del  Componente y luego escribiendo "{props.ObjectProperty}"(Entre LLaves similar a como en JQuery)
 *  donde "ObjectProperty" es la Propiedad del Objeto Props al cual le vamos a asignar un Valor específico al Declarar al Componente en Formato de Elemento HTML AutoCerrado.
 * NOTA:_ En los Componentes Tipo Clase las Props(Propiedades) se escriben {this.props.ObjectProperty}(Igual que en los Componentes Tipo Función pero con un "this." adelante) ya que no son
 * Funciones y no se le pueden Ingresar Parámetros.*/

function DefaultText(props) {
  return (
    <div>
      <h3>{props.subtitle}</h3>
      <div>{props.myText}</div>
    </div>
  );
}

/**+-(3)-Los Estados:_ Dentro de los Componentes Tipo Clase puede crearse una Propiedad llamada State(Estado) el cual se Escribe "state = {***}" donde "***" son los Datos que SI PUEDEN 
 * VARIAR(LOS STATES A DIFERENCIA DE LAS PROPS SÍ PUEDEN VARIAR/CAMBIAR DEPUÉS DE RENDERIZADO EL COMPONENTE) que se Escriben en Formato JSON y a partir de los cuales Puede Cambiar el Aspecto
 * del Componente.
 * +-Por Ejemplo a Continuación Creamos el Componnte Tipo Clase "AnotherText" con un Botón que a través de Un "if(***){ *** }" al Hacerle un Click (onClick={***}) cambia el State(Estado) 
 * "{this.state.show}" y en Consecuencia Cambia el Aspecto del Componente.*/

class AnotherText extends Component {

  state = {
    show: true
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <h3>{this.props.subtitle}</h3>
          <div>{this.props.myText}</div>
          <button onClick={() => this.setState({show: false})}>
          Toggle State
          </button>
        </div>
      );
    } else {
      return <div>
      <h1>There is No New Text Here.</h1>
      <button onClick={() => this.setState({show: true})}>
      Toggle State
      </button>
      </div>;
    }
      
  }
}

/**+-(4)-React Hooks:_Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los Componentes creados con una Function. Esto, antes, no era posible y 
 * nos obligaba a crear un Componente con Class para poder acceder a todas las posibilidades de la Librería. Y de ahí viene el nombre. "Hooks" es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus 
 * Componentes-Función a todas las características que ofrece React.*/
function SimpleStateFunction() {
  /**+- useState recibe un Parámetro: el valor inicial del estado (que será 0) y devuelve un array de dos posiciones:_
  // 1º-La Primera (count), tiene el valor del estado.
  // 2º-La segunda (setCount), el método para actualizar el estado.*/
  const [count, setCount] = useState(0);

  return <div>
    <h2>The Count is: {count}</h2>
    { /* Actualizamos el state al hacer Click con setCount. */ }
    <button onClick={() => setCount( count + 1 )}>
    Increase Count
    </button>
  </div>;
}



/** +-(5)-Como se puede ver a continuación, en React.js se puede meter un Componente "Hijo" dentro de un Componente "Padre" escribiendo el Nombre del Componente-Función "Hijo" en Formato 
 * de un Elemento HTML AutoCerrado así:_"<ChildComponent />". Se puede Invocar y Repetir cuantas veces se quiera.*/
 
const App = () => <div>
                    This is My Component: <HelloWorld />
                    <HelloWorld />
                    <ByeByeWorld />
                    <DefaultText subtitle="Jhon" myText="-How are you doing?" />
                    <DefaultText subtitle="Adam" myText="-Fine, I want to Drink a Coffee." />
                    <AnotherText subtitle="New Text" myText="Here is More New Text." />
                    <AnotherText subtitle="Hello" myText="Nice to meet you." />
                    <br/>
                    <SimpleStateFunction />
                  </div>;

export default App;
