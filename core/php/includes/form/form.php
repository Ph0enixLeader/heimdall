
<?php

/**
 * Form
 * Permet de generer un formulaire rapidement et simplement
 */
class Form{
        
    /**
     * data
     *
     * @var array Donnees utilisees par le formulaire
     */
    protected $data;
        
    private $img;
    
    /**
     * surround
     *
     * @var string Tag utiliser pour entourer les champs
     */
    public $surround = 'p';
    
    /**
     * __construct
     *
     * @param  mixed $data Donnees utilisees par le formulaire
     * 
     */
    public function __construct($data = array()){
        $this->data = $data;
    }
    
    /**
     * surround
     *
     * @param  $html Code HTML a entourer
     * @return string
     */
    protected function surround($html){
        return "<$this->surround>$html</$this->surround>";
    }
    
    /**
     * getValue
     *
     * @param  $index string index de la valeur a recuperer
     * @return string
     */
    protected function getValue($index){
        return isset($this->data[$index]) ? $this->data[$index] : null;
    }
    
    /**
     * input
     *
     * @param  $name string
     * @return string
     */
    public function input($name){
        return $this->surround('<input class="cyberpunk" type="text" name="'.$name.'" value="'.$this->getValue($name).'" placeholder = "'.$name.'">');
    }

    /**
     * input
     *
     * @param  $name string
     * @return string
     */
    public function inputpsw($name){
        return $this->surround('<input class="cyberpunk" type="password" name="'.$name.'" value="'.$this->getValue($name).'" placeholder = "'.$name.'">');
    }

    /**
     * input
     *
     * @param  $name string
     * @return string
     */
    public function inputemail($name){
        return $this->surround('<input class="cyberpunk" type="email" name="'.$name.'" value="'.$this->getValue($name).'" placeholder = "'.$name.'">');
    }

        /**
     * input
     *
     * @param  $name string
     * @return string
     */
    public function inputarea($name){
        return $this->surround('<input type="textarea" name="'.$name.'" value="'.$this->getValue($name).'">');
    }

    /**
     * submit
     *
     * @return string
     */
    public function submit(){
        return $this->surround('<button class="cybr-btn" type="submit" style="margin-top: 20px; --primary-hue: 60; --primary-lightness: 50;" >
                                Submit<span aria-hidden>_</span>
                                <span aria-hidden class="cybr-btn__glitch">Error_</span>
                                <span aria-hidden class="cybr-btn__tag">R25</span>
                                </button>');
    }

    public function reset(){
        return $this->surround('<button class="cybr-btn" type="reset" style="margin-top: 20px; --primary-hue: 60; --primary-lightness: 50;" >
                                Reset<span aria-hidden>_</span>
                                <span aria-hidden class="cybr-btn__glitch">Error_</span>
                                <span aria-hidden class="cybr-btn__tag">R25</span>
                                </button>');
    }
}